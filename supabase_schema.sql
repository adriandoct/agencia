-- TJX Oaxaca Travel Supabase Schema

-- Users table extension (public.users)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  telefono TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for Users
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all users" ON public.users FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin')
);

-- Hoteles
CREATE TABLE public.hoteles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  estrellas INTEGER CHECK (estrellas >= 1 AND estrellas <= 5),
  precio NUMERIC NOT NULL,
  imagen TEXT,
  ubicacion TEXT NOT NULL,
  disponible BOOLEAN DEFAULT TRUE,
  promocion TEXT
);

-- Tours
CREATE TABLE public.tours (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  precio NUMERIC NOT NULL,
  imagen TEXT,
  ubicacion TEXT NOT NULL,
  duracion TEXT,
  cupos_disponibles INTEGER DEFAULT 10,
  disponible BOOLEAN DEFAULT TRUE
);

-- Vuelos
CREATE TABLE public.vuelos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  origen TEXT NOT NULL,
  destino TEXT NOT NULL,
  salida TIMESTAMP WITH TIME ZONE NOT NULL,
  regreso TIMESTAMP WITH TIME ZONE,
  precio NUMERIC NOT NULL,
  aerolinea TEXT NOT NULL,
  escalas INTEGER DEFAULT 0,
  disponible BOOLEAN DEFAULT TRUE
);

-- Bookings (Reservas)
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  tipo TEXT CHECK (tipo IN ('vuelo', 'hotel', 'tour', 'paquete')),
  detalle JSONB NOT NULL,
  precio NUMERIC NOT NULL,
  fecha_reserva TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

-- RLS for Bookings
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own bookings" ON public.bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own bookings" ON public.bookings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all bookings" ON public.bookings FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin')
);

-- RLS for Public Tables (Hoteles, Tours, Vuelos)
ALTER TABLE public.hoteles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view available hoteles" ON public.hoteles FOR SELECT USING (disponible = TRUE);
CREATE POLICY "Admins can manage hoteles" ON public.hoteles FOR ALL USING (
  EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin')
);

ALTER TABLE public.tours ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view available tours" ON public.tours FOR SELECT USING (disponible = TRUE);
CREATE POLICY "Admins can manage tours" ON public.tours FOR ALL USING (
  EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin')
);

ALTER TABLE public.vuelos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view available vuelos" ON public.vuelos FOR SELECT USING (disponible = TRUE);
CREATE POLICY "Admins can manage vuelos" ON public.vuelos FOR ALL USING (
  EXISTS (SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin')
);

-- Trigger for inserting a user into public.users when they sign up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, nombre, role)
  VALUES (new.id, new.email, COALESCE(new.raw_user_meta_data->>'nombre', 'Usuario'), 'user');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

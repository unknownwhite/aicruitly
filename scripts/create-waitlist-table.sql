-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  company VARCHAR(255) NOT NULL,
  job_title VARCHAR(255),
  team_size VARCHAR(50),
  current_tool TEXT,
  pain_points TEXT[],
  interests TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_signups(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist_signups(created_at);

-- Enable Row Level Security
ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for new signups)
CREATE POLICY "Allow public inserts" ON waitlist_signups
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow reads for authenticated users (for admin)
CREATE POLICY "Allow authenticated reads" ON waitlist_signups
  FOR SELECT TO authenticated
  USING (true);

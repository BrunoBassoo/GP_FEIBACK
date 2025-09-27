-- Initialize FEI Feedback Platform Database
-- This script runs automatically when the container starts for the first time

-- Create database (already created by POSTGRES_DB env var)
-- CREATE DATABASE feiback;

-- Grant all privileges to feiback_user
GRANT ALL PRIVILEGES ON DATABASE feiback TO feiback_user;

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- You can add more initialization SQL here if needed

-- Creates the patients table used by the clinic intake service.
-- Stores identity, contact, and clinical data for each enrolled patient.
CREATE TABLE patients (
    id            uuid PRIMARY KEY,
    patient_id    varchar(64) NOT NULL,
    mrn           varchar(64) NOT NULL,
    full_name     varchar(255) NOT NULL,
    email         varchar(255) NOT NULL,
    phone         varchar(32),
    date_of_birth date,
    ssn           varchar(11),
    drivers_license varchar(32),
    passport      varchar(32),
    insurance_id  varchar(64),
    diagnosis     text,
    diagnosis_code varchar(16),
    treatment_plan text,
    health_conditions text,
    biometric_signature bytea,
    genetic_markers text,
    race          varchar(64),
    religion      varchar(64),
    latitude      double precision,
    longitude     double precision
);

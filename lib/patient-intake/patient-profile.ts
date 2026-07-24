/**
 * Patient intake profile captured during clinic onboarding.
 *
 * This model persists health and identity data for each enrolled patient so
 * that downstream care and billing services can reference a single record.
 */
export interface PatientProfile {
  patientId: string;
  medicalRecordNumber: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  ssn: string;
  driversLicense: string;
  passport: string;
  insuranceId: string;
  diagnosis: string;
  diagnosisCode: string;
  treatmentPlan: string;
  healthConditions: string[];
  disability: string;
  biometricSignature: string;
  geneticMarkers: string;
  race: string;
  religion: string;
  latitude: number;
  longitude: number;
}

/**
 * Request payload accepted by the public intake endpoint. The service maps this
 * DTO onto a PatientProfile after validation.
 */
export interface CreatePatientRequest {
  fullName: string;
  email: string;
  ssn: string;
  dateOfBirth: string;
  healthConditions: string[];
  diagnosis: string;
  biometricSignature: string;
}

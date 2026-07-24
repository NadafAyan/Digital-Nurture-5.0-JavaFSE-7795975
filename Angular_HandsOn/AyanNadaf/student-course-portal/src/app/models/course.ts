export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus?: 'Excellent' | 'Good' | 'Needs Review';
  description?: string;
}

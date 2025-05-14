export interface BackendValidationError {
      type: string;
      value?: string;
      msg: string;
      path: string;
      location: string;
    }
    
export interface BackendErrorPayload {
    message: string;
    errors?: BackendValidationError[];
}
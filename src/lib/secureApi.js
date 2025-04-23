import { supabase } from './supabase';

export const secureApi = {
  async handleSensitiveOperation(operationType, data) {
    try {
      const { data: result, error } = await supabase
        .rpc('handle_sensitive_operation', {
          operation_type: operationType,
          data: data
        });

      if (error) throw error;
      return result;
    } catch (error) {
      console.error('Error in sensitive operation:', error);
      throw error;
    }
  },

  // Add rate limiting
  async rateLimitedRequest(operation, maxRequests = 10, timeWindow = 60000) {
    const key = `rate_limit_${operation}`;
    const now = Date.now();
    const requests = JSON.parse(localStorage.getItem(key) || '[]');
    
    // Clean old requests
    const validRequests = requests.filter(time => now - time < timeWindow);
    
    if (validRequests.length >= maxRequests) {
      throw new Error('Rate limit exceeded');
    }
    
    validRequests.push(now);
    localStorage.setItem(key, JSON.stringify(validRequests));
    
    return true;
  },

  // Validate request data
  validateRequest(data, schema) {
    const errors = [];
    for (const [key, rules] of Object.entries(schema)) {
      if (rules.required && !data[key]) {
        errors.push(`${key} is required`);
      }
      if (rules.type && typeof data[key] !== rules.type) {
        errors.push(`${key} must be of type ${rules.type}`);
      }
    }
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }
    return true;
  }
}; 
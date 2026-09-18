/**
 * Privacy-Conscious Analytics Dispatcher
 * 
 * Tracks marketing engagement events without collecting or passing Protected Health Information (PHI).
 * This module is strictly decoupled from any future clinical EHR or patient portals.
 */

export type AnalyticsEventType =
  | 'consultation_cta_clicked'
  | 'consultation_started'
  | 'consultation_submitted'
  | 'phone_clicked'
  | 'email_clicked'
  | 'therapy_service_viewed'
  | 'advocacy_service_viewed'
  | 'emdr_service_viewed'
  | 'client_portal_clicked'
  | 'workshop_inquiry'
  | 'resource_article_viewed'
  | 'page_view';

export interface AnalyticsEventPayload {
  location?: string;
  category?: string;
  source?: string;
  articleId?: string;
  serviceId?: string;
  format?: string;
  [key: string]: unknown;
}

export function trackEvent(eventType: AnalyticsEventType, payload: AnalyticsEventPayload = {}): void {
  // Ensure NO sensitive personal or health information is in the payload
  const sanitizedPayload: AnalyticsEventPayload = {
    ...payload,
    timestamp: new Date().toISOString(),
  };

  // Safe console log in development environment
  if (import.meta.env.DEV) {
    console.info(`[GroWell Analytics Event]: ${eventType}`, sanitizedPayload);
  }

  // Hook for future Google Tag Manager, Plausible, or HIPAA-safe marketing analytics
  if (typeof window !== 'undefined') {
    // Custom DOM Event for extensible integrations
    const customEvent = new CustomEvent('growell_analytics_event', {
      detail: { event: eventType, data: sanitizedPayload }
    });
    window.dispatchEvent(customEvent);

    // Standard dataLayer hook if present
    const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    if (win.dataLayer && Array.isArray(win.dataLayer)) {
      win.dataLayer.push({
        event: eventType,
        ...sanitizedPayload,
      });
    }
  }
}

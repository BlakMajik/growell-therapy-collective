import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, X } from 'lucide-react';

export interface ToastProps {
  show: boolean;
  type?: 'success' | 'warning' | 'info';
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  show,
  type = 'success',
  title,
  message,
  onClose,
  duration = 7000,
}) => {
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className={`toast-notification toast-${type}`} role="alert" aria-live="assertive">
      <div className="toast-icon-wrap">
        {type === 'success' ? (
          <CheckCircle2 size={22} className="toast-icon-success" />
        ) : (
          <AlertTriangle size={22} className="toast-icon-warning" />
        )}
      </div>
      <div className="toast-content">
        <h4 className="toast-title">{title}</h4>
        <p className="toast-message">{message}</p>
      </div>
      <button
        type="button"
        className="toast-close-btn"
        onClick={onClose}
        aria-label="Close notification"
      >
        <X size={18} />
      </button>

      <style>{`
        .toast-notification {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          max-width: 440px;
          background-color: #ffffff;
          border-radius: var(--radius-md);
          box-shadow: 0 12px 32px rgba(32, 51, 40, 0.18);
          padding: 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          z-index: 9999;
          border: 1px solid var(--color-border);
          animation: toastSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes toastSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .toast-success {
          border-left: 4px solid var(--color-sage);
        }

        .toast-warning {
          border-left: 4px solid var(--color-amber-gold);
        }

        .toast-icon-wrap {
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .toast-icon-success {
          color: var(--color-sage);
        }

        .toast-icon-warning {
          color: var(--color-amber-gold);
        }

        .toast-content {
          flex: 1;
        }

        .toast-title {
          font-size: 0.96rem;
          font-weight: 600;
          color: var(--color-forest);
          margin-bottom: 0.25rem;
        }

        .toast-message {
          font-size: 0.86rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        .toast-close-btn {
          color: var(--color-text-light);
          padding: 0.2rem;
          border-radius: 4px;
          transition: color var(--transition-fast);
        }

        .toast-close-btn:hover {
          color: var(--color-forest);
        }

        @media (max-width: 640px) {
          .toast-notification {
            left: 1rem;
            right: 1rem;
            bottom: 1rem;
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};

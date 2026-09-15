import type { ComponentProps } from 'react';
import { ArrowDown, ArrowDownToLine, ArrowUpRight } from '@/components/site-icons';

type ActionLinkProps = ComponentProps<'a'> & {
  variant?: 'primary' | 'secondary';
  direction?: 'down' | 'external' | 'download';
};

/** A flat link with a separate direction control. Motion only responds to intent. */
export function ActionLink({ children, variant = 'primary', direction = 'external', className = '', ...props }: ActionLinkProps) {
  const Icon = direction === 'down' ? ArrowDown : direction === 'download' ? ArrowDownToLine : ArrowUpRight;
  return (
    <a data-direction={direction} className={`action-link action-${variant} ${className}`} {...props}>
      <span className="action-label">{children}</span>
      <span className="action-direction" aria-hidden="true">
        <Icon size={17} />
      </span>
    </a>
  );
}

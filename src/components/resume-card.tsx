"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Badge } from '@/components/badge';
import { Card } from '@/components/card';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  location?: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  location,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="overflow-hidden">
        <div className="flex p-4 gap-4">
          <div className="flex-none">
            <Avatar className="border size-12 bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex items-start justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center gap-2 font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 shrink-0 transform transition-all duration-300 ease-out",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground shrink-0">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs text-muted-foreground mt-1">
                {subtitle}
              </div>
            )}
            {location && (
              <div className="font-sans text-xs text-muted-foreground/70 mt-0.5">
                {location}
              </div>
            )}
            {description && (
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0,
                  marginTop: isExpanded ? 8 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <Markdown
                  components={{
                    p: ({ children }) => (
                      <p className="prose max-w-full text-pretty font-sans text-xs sm:text-sm text-muted-foreground dark:prose-invert">
                        {children}
                      </p>
                    ),
                  }}
                >
                  {description}
                </Markdown>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

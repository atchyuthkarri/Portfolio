'use client';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface Props {
    project: IProject;
    index: number;
}

const ProjectCard = ({ project, index }: Props) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (window.innerWidth < 768) return;

        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.4,
        });

        gsap.to(contentRef.current, {
            y: -10,
            duration: 0.4,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.4,
        });

        gsap.to(contentRef.current, {
            y: 0,
            duration: 0.4,
        });
    };

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-card group relative overflow-hidden rounded-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <div className="relative w-full h-full bg-background-light overflow-hidden">
                {/* Image */}
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Dark Overlay */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300"
                />

                {/* Content */}
                <div
                    ref={contentRef}
                    className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 bg-gradient-to-t from-black via-black/50 to-transparent"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="text-xs md:text-sm font-mono text-muted-foreground">
                                _{(index + 1).toString().padStart(2, '0')}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {project.year}
                            </span>
                        </div>
                        <h3 className="text-lg md:text-2xl font-anton leading-tight group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.techStack.slice(0, 2).map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 2 && (
                                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                                    +{project.techStack.length - 2}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </TransitionLink>
    );
};

export default ProjectCard;

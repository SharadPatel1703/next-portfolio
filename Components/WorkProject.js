import styles from '../styles/Work.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import { HStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from 'react';
import { useSwipeable } from "react-swipeable";

const WorkProject = ({ currentTheme, project, id }) => {
    const toast = useToast();
    const [index, setIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev()
    });

    if (!project || !project.photo || project.photo.length === 0) {
        return null;
    }

    const handleNext = () => {
        if (project.photo.length <= 1) return;
        setIndex((prev) => (prev + 1) % project.photo.length);
    };

    const handlePrev = () => {
        if (project.photo.length <= 1) return;
        setIndex((prev) => (prev - 1 + project.photo.length) % project.photo.length);
    };

    const showGitToast = () => {
        toast({
            description: "Sorry, this project has a private repository!",
            status: "info",
            isClosable: true,
        });
    };

    const showProjToast = () => {
        toast({
            description: "Sorry, this project has not been deployed yet!",
            status: "info",
            isClosable: true,
        });
    };

    return (
        <div className={styles.parentofparentcard} style={{ justifyContent: id % 2 === 0 ? 'flex-start' : 'flex-end' }}>
            <div className={styles.parentcard}>
                <div className={styles.cardtitle}>
                    <h1 className={styles.projtitle}>{project.name}</h1>
                    <HStack spacing={2}>
                        {project.tech.map((tech) => (
                            <div key={tech}>
                                <Tag
                                    size="sm"
                                    borderRadius="md"
                                    variant="subtle"
                                    colorScheme={currentTheme.name === 'light' ? "cyan" : "purple"}
                                >
                                    <TagLabel>{tech}</TagLabel>
                                </Tag>
                            </div>
                        ))}
                    </HStack>
                </div>

                <div className={styles.imageandsocials}>
                    <div
                        className={styles.card}
                        {...handlers}
                        style={{
                            borderColor: currentTheme.footerColor,
                            position: 'relative',
                            width: '500px',
                            height: '300px',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <img
                                src={project.photo[index]}
                                alt={`${project.name} screenshot`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/images/placeholder.jpg";
                                }}
                            />
                        </div>

                        {project.photo.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '10px',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '30px',
                                        height: '30px',
                                        cursor: 'pointer',
                                        zIndex: 10,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    &lt;
                                </button>
                                <button
                                    onClick={handleNext}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '10px',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '30px',
                                        height: '30px',
                                        cursor: 'pointer',
                                        zIndex: 10,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    &gt;
                                </button>
                            </>
                        )}
                    </div>

                    <div>
                        <Tooltip label="Github link" placement="right">
                            <div className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
                                {project.githubLink ? (
                                    <Link href={project.githubLink}>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithubAlt} />
                                        </a>
                                    </Link>
                                ) : (
                                    <FontAwesomeIcon icon={faGithubAlt} onClick={showGitToast} />
                                )}
                            </div>
                        </Tooltip>
                        <Tooltip label="Project link" placement="right">
                            <div className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
                                {project.projectLink ? (
                                    <Link href={project.projectLink}>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faTelegramPlane} />
                                        </a>
                                    </Link>
                                ) : (
                                    <FontAwesomeIcon icon={faTelegramPlane} onClick={showProjToast} />
                                )}
                            </div>
                        </Tooltip>
                    </div>
                </div>

                <div className={styles.cardbottom}>
                    <p className={styles.projdescription}>{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default WorkProject;
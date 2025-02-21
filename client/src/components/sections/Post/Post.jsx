"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { Icon, Button } from "@/components";
import styles from "./Post.module.css";

export function Post({ media = [] }) {
    
    const [imageCount, setImageCount] = useState(media.length);
    const extraMediaCount = imageCount > 5 ? imageCount - 5 : 0;

    useEffect(() => {
        setImageCount(media.length);
    }, [media]);

    const mediaGalleryClassName = () => {
        let subClassName = "";
        switch (imageCount) {
            case 1:
                subClassName = styles.one_image;
                break;
            case 2:
                subClassName = styles.two_images;
                break;
            case 3:
                subClassName = styles.three_images;
                break;
            case 4:
                subClassName = styles.four_images;
                break;
            case 5:
                subClassName = styles.five_images;
                break;
            default:
                subClassName = styles.more_images;
                break;
        }
        return clsx(styles.media_gallery, subClassName);
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.avatar_container}>
                    <Image src="/images/avatar.png" width={40} height={40} alt="Avatar" />
                </div>
                <div className={styles.info}>
                    <div className={styles.display_name}>Châu Thành Cường</div>
                    <div className={styles.post_info_container}>
                        <p className={styles.date}>19/2/2025</p>
                        <p className={styles.time}>11:58 PM</p>
                        <Icon name={"earth"} size={16} />
                    </div>
                </div>
                <Button appearance={"subtle"}> 
                    <Icon name={"more_horizontal"} size={16}></Icon>
                </Button>
            </div>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur. Id suscipit pharetra sagittis amet sed elementum nibh consequat. Mattis morbi congue donec mattis tortor porta dignissim.</p>
            </div>
            {media.length > 0 && (
                <div className={mediaGalleryClassName()}>
                    {media.slice(0, 5).map((src, index) => (
                        <div key={index} className={styles.media_item}>
                            <Image src={src} alt={`media-${index}`} fill />
                            {index === 4 && extraMediaCount > 0 && (
                                <div className={styles.overlay}>+{extraMediaCount}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div className={styles.footer}>
                <div className={styles.footer_left}>
                    <Button appearance={"subtle"}>
                        100
                        <Icon name={"heart"} size={20} type={"regular"}></Icon>
                    </Button>
                    <Button appearance={"subtle"}>
                        100
                        <Icon name={"chat_empty"} size={20} type={"regular"}></Icon>
                    </Button>
                    <Button appearance={"subtle"}>
                        100
                        <Icon name={"share"} size={20} type={"regular"}></Icon>
                    </Button>
                </div>
                <div className={styles.footer_right}>
                    <Button appearance={"subtle"}>
                        <Icon name={"bookmark"} size={20} type={"regular"}></Icon>
                    </Button>
                </div>
            </div>
        </div>
    );
}

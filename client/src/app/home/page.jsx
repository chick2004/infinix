import ClientLayout from "@/layouts/ClientLayout/ClientLayout";

import { TrendingTags, SuggestionUsers, CreatePost, Post } from "@/components";


import styles from './page.module.css';

export default function Page() {
    return (
        <ClientLayout>
            <div className={styles.page}>
                <div className={styles.left}>
                    <TrendingTags></TrendingTags>
                    <SuggestionUsers></SuggestionUsers>
                </div>
                <div className={styles.center}>
                    <CreatePost></CreatePost>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </div>
                <div className={styles.right}>3</div>
            </div>
        </ClientLayout>
    );
}
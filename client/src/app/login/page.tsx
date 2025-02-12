import Image from "next/image";
import Link from "next/link";

import Field from "@/components/Field/Field";
import TextInput from "@/components/Input/TextInput";
import PasswordInput from "@/components/Input/PasswordInput";
import Button from "@/components/Button/Button";

import styles from './page.module.css';

export default function LoginPage() {

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                
            <form action="" className={styles.form}>
                <div>
                    <Image src='/images/logo_with_text.png' alt='' width={102} height={35}></Image>
                </div>

                <div>
                    <p className={'text-primary text-body-large'}>Login</p>
                </div>

                <div>
                    <Field label='Email'>
                        <TextInput></TextInput>
                    </Field>
                </div>

                <div>
                    <Field label='Password'>
                        <PasswordInput></PasswordInput>
                    </Field>
                </div>

                <div>
                    <p className='text-body text-tertiary'>Don't have an account? <span><Link href={'/register'} className='text-accent-default link'>Create new</Link></span></p>
                </div>

                <div>
                    <Button appearance={'accent'}>Next</Button>
                </div>
            </form>
        </div>
    </div>
    );
}
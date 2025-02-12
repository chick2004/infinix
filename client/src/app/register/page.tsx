import Image from "next/image";
import Link from "next/link";

import Field from "@/components/Field/Field";
import TextInput from "@/components/Input/TextInput";
import PasswordInput from "@/components/Input/PasswordInput";
import Button from "@/components/Button/Button";

import styles from './page.module.css';

export default function RegisterPage() {

    const step_1 = () => {
        return (
            <form action="" className={styles.form}>
                <div>
                    <Image src='/images/logo_with_text.png' alt='' width={102} height={35}></Image>
                </div>

                <div>
                    <p className={'text-primary text-body-large'}>Create an account</p>
                </div>

                <div>
                    <Field label='Full name'>
                        <TextInput></TextInput>
                    </Field>
                </div>

                <div>
                    <p className='text-body text-tertiary'>Already have an account? <span><Link href={'/login'} className='text-accent-default link'>Login</Link></span></p>
                </div>

                <div>
                    <Button appearance={'accent'}>Next</Button>
                </div>
            </form>
        );
    }

    const step_2 = () => {
        return (
            <form action="" className={styles.form}>
                <div>
                    <Image src='/images/logo_with_text.png' alt='' width={102} height={35}></Image>
                </div>

                <div>
                    <p className={'text-primary text-body-large'}>Create an account</p>
                </div>

                <div>
                    <Field label='Email'>
                        <TextInput></TextInput>
                    </Field>
                </div>

                <div>
                    <p className='text-body text-tertiary'>Already have an account? <span><Link href={'/login'} className='text-accent-default link'>Login</Link></span></p>
                </div>

                <div>
                    <Button appearance={'accent'}>Send code</Button>
                </div>
            </form>
        );
    }

    const step_3= () => {
        return (
            <form action="" className={styles.form}>
                <div>
                    <Image src='/images/logo_with_text.png' alt='' width={102} height={35}></Image>
                </div>

                <div>
                    <p className={'text-primary text-body-large'}>Create an account</p>
                </div>

                <div>
                    <Field label='Enter your code'>
                        <TextInput></TextInput>
                    </Field>
                </div>

                <div>
                    <p className='text-body text-tertiary'>Already have an account? <span><Link href={'/login'} className='text-accent-default link'>Login</Link></span></p>
                </div>

                <div>
                    <Button appearance={'accent'}>Verify</Button>
                </div>
            </form>
        );
    }

    const step_4 = () => {
        return (
            <form action="" className={styles.form}>
                <div>
                    <Image src='/images/logo_with_text.png' alt='' width={102} height={35}></Image>
                </div>

                <div>
                    <p className={'text-primary text-body-large'}>Create an account</p>
                </div>

                <div>
                    <Field label='Set your password'>
                        <PasswordInput></PasswordInput>
                    </Field>
                </div>

                <div>
                    <Field label='Confirm your password'>
                        <PasswordInput></PasswordInput>
                    </Field>
                </div>

                <div>
                    <p className='text-body text-tertiary'>Already have an account? <span><Link href={'/login'} className='text-accent-default link'>Login</Link></span></p>
                </div>

                <div>
                    <Button appearance={'accent'}>Create account</Button>
                </div>
            </form>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {step_4()}
            </div>
        </div>
    );
}
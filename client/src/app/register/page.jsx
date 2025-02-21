import Image from "next/image";
import Link from "next/link";

import { Field, Input, Button} from "@/components";

import styles from "./page.module.css";

export default function Page() {

    const step_1 = () => {
        return (
            <form action="" className={styles.form}>
                <div>
                    <Image src="/images/logo_with_text.png" alt="" width={102} height={35}></Image>
                </div>

                <div>
                    <p className={"text-primary text-body-large"}>Create an account</p>
                </div>

                <div>
                    <Field label="Full name">
                        <Input></Input>
                    </Field>
                </div>

                <div>
                    <p className="text-body text-tertiary">Already have an account? <span><Link href={"/login"} className="text-accent-default link">Login</Link></span></p>
                </div>

                <div>
                    <Button appearance={"accent"}>Next</Button>
                </div>
            </form>
        );
    }

    const step_2 = () => {
        return (
            <form action="" className={styles.form}>
                <div>
                    <Image src="/images/logo_with_text.png" alt="" width={102} height={35}></Image>
                </div>

                <div>
                    <p className={"text-primary text-body-large"}>Create an account</p>
                </div>

                <div>
                    <Field label="Email">
                        <Input></Input>
                    </Field>
                </div>

                <div>
                    <p className="text-body text-tertiary">Already have an account? <span><Link href={"/login"} className="text-accent-default link">Login</Link></span></p>
                </div>

                <div>
                    <Button appearance={"accent"}>Send code</Button>
                </div>
            </form>
        );
    }

    const step_3= () => {
        return (
            <form action="" className={styles.form}>
                <div>
                    <Image src="/images/logo_with_text.png" alt="" width={102} height={35}></Image>
                </div>

                <div>
                    <p className={"text-primary text-body-large"}>Create an account</p>
                </div>

                <div>
                    <Field label="Enter your code">
                        <Input></Input>
                    </Field>
                </div>

                <div>
                    <p className="text-body text-tertiary">Already have an account? <span><Link href={"/login"} className="text-accent-default link">Login</Link></span></p>
                </div>

                <div>
                    <Button appearance={"accent"}>Verify</Button>
                </div>
            </form>
        );
    }

    const step_4 = () => {
        return (
            <form action="" className={styles.form}>
                <div>
                    <Image src="/images/logo_with_text.png" alt="" width={102} height={35}></Image>
                </div>

                <div>
                    <p className={"text-primary text-body-large"}>Create an account</p>
                </div>

                <div>
                    <Field label="Set your password">
                        <Input type={"password"}></Input>
                    </Field>
                </div>

                <div>
                    <Field label="Confirm your password">
                        <Input type={"password"}></Input>
                    </Field>
                </div>

                <div>
                    <p className="text-body text-tertiary">Already have an account? <span><Link href={"/login"} className="text-accent-default link">Login</Link></span></p>
                </div>

                <div>
                    <Button appearance={"accent"}>Create account</Button>
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
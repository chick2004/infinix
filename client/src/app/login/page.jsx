import Image from "next/image";
import Link from "next/link";

import { Field, Input, Button} from "@/components";

import styles from "./page.module.css";

export default function Page() {

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                
            <form action="" className={styles.form}>
                <div>
                    <Image src="/images/logo_with_text.png" alt="" width={102} height={35}></Image>
                </div>

                <div>
                    <p className={"text-primary text-body-large"}>Login</p>
                </div>

                <div>
                    <Field label="Email">
                        <Input></Input>
                    </Field>
                </div>

                <div>
                    <Field label="Password">
                        <Input type={"password"}></Input>
                    </Field>
                </div>

                <div>
                    <p className="text-body text-tertiary">Don"t have an account? <span><Link href={"/register"} className="text-accent-default link">Create new</Link></span></p>
                </div>

                <div>
                    <Button appearance={"accent"}>Next</Button>
                </div>
            </form>
        </div>
    </div>
    );
}
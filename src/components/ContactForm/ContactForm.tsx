"use client";

import { useRef, useState } from "react";
import { Button } from "~/components/Ui/Button";
import { Label } from "~/components/Ui/Label";
import { Input } from "~/components/Ui/Input";
import { Textarea } from "~/components/Ui/TextArea";
import { MessageCard } from "~/components/MessageCard";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [responseMessage, setResponseMessage] = useState("");
	const [hasError, setHasError] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// @ts-ignore
		const formData = new FormData(formRef.current);

		fetch("https://formspree.io/f/xzzpebvr", {
			method: 'POST',
			body: formData,
			headers: {
				'Accept': 'application/json'
			},
		})
			.then(response => response.json())
			.then(data => {
				if (data.ok) {
					setResponseMessage("Gracias por tu mensaje ❤️, responderé lo antes posible.");
					setHasError(false);
					formRef.current?.reset();
				} else {
					setResponseMessage(data.error || "Oops! Algo salió mal.");
					setHasError(true);
				}
			})
			.catch(error => {
				setResponseMessage("Oops! Algo salió mal.");
				setHasError(true);
			});
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit} className={styles.form} method="POST">
			<Label>
				<span className={styles.labelWrapper}>Nombre</span>
				<Input placeholder="Alfredo Linux" name="name" autoComplete="name" required />
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Correo</span>
				<Input
					placeholder="alfredlinux@gmail.com"
					type="email"
					name="email"
					autoComplete="email"
					required
				/>
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Mensaje</span>
				<Textarea placeholder="Hola Max, [Insertar Mensaje]" name="message" required />
			</Label>
			<Button type="submit" size="medium">
				Enviar
			</Button>
			{responseMessage && (
				<MessageCard variant={hasError ? "error" : "success"}>{responseMessage}</MessageCard>
			)}
		</form>
	);
};

export default ContactForm;

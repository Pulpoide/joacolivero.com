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
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");
	const [hasError, setHasError] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Submitting form");

		// Reset global response message
		setResponseMessage("");

		// @ts-ignore
		const formData = new FormData(formRef.current);

		try {
			const response = await fetch("https://formspree.io/f/xzzpebvr", {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});

			const data = await response.json();
			if (data.ok) {
				setResponseMessage("Gracias por tu consulta. Responderé a la brevedad.");
				setHasError(false);
				formRef.current?.reset();
			} else {
				setResponseMessage(data.error || "Oops! Algo salió mal.");
				setHasError(true);
			}
		} catch (error) {
			console.error("Form submit error:", error);
			setResponseMessage("Error de red. Intente nuevamente.");
			setHasError(true);
		}
	};

	const validateName = (name: string) => {
		if (name.length < 5) {
			setNameError("Por favor, ingrese su nombre completo.");
			setHasError(true);
		} else {
			setNameError("");
			setHasError(false);
		}
	};

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.value;
		validateName(name);
	};

	const validateEmail = (email: string) => {
		const emailRegex =
			/^(?=.{1,254}$)(?=.{1,64}@.{1,255}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9][a-zA-Z0-9.-]{0,253}[a-zA-Z0-9]\.[a-zA-Z]{2,24}$/;
		if (!emailRegex.test(email)) {
			setEmailError("Por favor, ingrese un correo válido.");
			setHasError(true);
		} else {
			setEmailError("");
			setHasError(false);
		}
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const email = event.target.value;
		validateEmail(email);
	};

	const validateMessage = (message: string) => {
		if (message.length < 5) {
			setMessageError("Por favor, ingrese un mensaje más largo.");
			setHasError(true);
		} else {
			setMessageError("");
			setHasError(false);
		}
	};

	const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const message = event.target.value;
		validateMessage(message);
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit} className={styles.form} method="POST">
			<Label>
				<span className={styles.labelWrapper}>Nombre</span>
				<Input
					placeholder="Ingrese su nombre completo"
					name="name"
					autoComplete="name"
					required
					onChange={handleNameChange}
				/>
				{nameError && <p className={styles.error}>{nameError}</p>}
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Correo</span>
				<Input
					placeholder="ejemplo@correo.com"
					type="email"
					name="email"
					autoComplete="email"
					onInput={handleEmailChange}
					required
				/>
				{emailError && <p className={styles.error}>{emailError}</p>}
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Mensaje</span>
				<Textarea
					placeholder="Escriba su mensaje aquí"
					name="message"
					required
					onChange={handleMessageChange}
				/>
				{messageError && <p className={styles.error}>{messageError}</p>}
			</Label>
			<Button type="submit" size="medium" disabled={hasError}>
				Enviar
			</Button>
			{responseMessage && (
				<MessageCard variant={hasError ? "error" : "success"}>{responseMessage}</MessageCard>
			)}
		</form>
	);
};

export default ContactForm;

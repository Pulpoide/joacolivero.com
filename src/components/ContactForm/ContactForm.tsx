"use client"

import { useRef, useState } from "react"
import { Button } from "~/components/Ui/Button"
import { Label } from "~/components/Ui/Label"
import { Input } from "~/components/Ui/Input"
import { Textarea } from "~/components/Ui/TextArea"
import { MessageCard } from "~/components/MessageCard"
import styles from "./ContactForm.module.css"

const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null)
	const [responseMessage, setResponseMessage] = useState("")
	const [hasError, setHasError] = useState(false)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		// @ts-ignore
		const formData = new FormData(formRef.current)

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
					setResponseMessage("Gracias por tu consulta. Responderé a la brevedad.")
					setHasError(false)
					formRef.current?.reset()
				} else {
					setResponseMessage(data.error || "Oops! Algo salió mal.")
					setHasError(true)
				}
			})
			.catch(error => {
				console.error("Form submit error:", error);
				setResponseMessage("Oops! Algo salió mal.");
				setHasError(true)
			})
	}

	const correctName = (event: React.FocusEvent<HTMLInputElement>) => {
		const name = event.target.value
		if (name.length < 5) {
			setResponseMessage("Por favor, ingrese su nombre completo.");
			setHasError(true);
			return;
		} else {
			setResponseMessage("");
			setHasError(false);
		}
	}

	const correctEmail = (event: React.FocusEvent<HTMLInputElement>) => {
		const email = event.target.value
		const emailRegex = /^(?=.{1,254}$)(?=.{1,64}@.{1,255}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9][a-zA-Z0-9.-]{0,253}[a-zA-Z0-9]\.[a-zA-Z]{2,24}$/
		if (!emailRegex.test(email)) {
			setResponseMessage("Por favor ingrese un correo electrónico válido.");
			setHasError(true);
			return;
		} else {
			setResponseMessage("");
			setHasError(false);
		}
	}

	const correctMessage = (event: React.FocusEvent<HTMLTextAreaElement>) => {
		const message = event.target.value
		if (message.length < 5) {
			setResponseMessage("Por favor, ingrese un mensaje más largo.");
			setHasError(true);
			return;
		} else {
			setResponseMessage("");
			setHasError(false);
		}
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit} className={styles.form} method="POST">
			<Label>
				<span className={styles.labelWrapper}>Nombre</span>
				<Input placeholder="Ingrese su nombre completo" name="name" autoComplete="name" required onChange={correctName} />
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Correo</span>
				<Input
					placeholder="ejemplo@correo.com"
					type="email"
					name="email"
					autoComplete="email"
					onInput={correctEmail}
					required
				/>
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Mensaje</span>
				<Textarea placeholder="Escriba su mensaje aquí" name="message" required onChange={correctMessage} />
			</Label>
			<Button type="submit" size="medium" disabled={hasError}>
				Enviar
			</Button>
			{responseMessage && (
				<MessageCard variant={hasError ? "error" : "success"}>{responseMessage}</MessageCard>
			)}
		</form>
	)
}

export default ContactForm

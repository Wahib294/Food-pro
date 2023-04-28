import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

type Props = {}

const Index = (props: Props) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [isError, setIsError] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

	return (
		<form className="grid w-screen h-full grid-cols-3 grid-rows-4 gap-5">
            <h1 className="flex items-end py-4 text-2xl font-bold col-start-2">Contact</h1>
			<div className="flex flex-col gap-2 col-start-2 col-end-2 row-start-2">
				<Label htmlFor="email-2">Email</Label>
				<Input
					type="email"
					id="email-2"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="text-sm text-slate-500">Enter your email address.</p>
			</div>
			<div className="flex flex-col gap-2 col-start-2 col-end-2 row-start-3">
				<Label htmlFor="name-2">Name</Label>
				<Input
					type="text"
					id="name-2"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div className="flex flex-col gap-2 col-start-2 col-end-2 row-start-4">
				<Label htmlFor="name-2">Name</Label>
				<Textarea
					id="message-2"
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
            <div className="flex flex-col gap-2 col-start-2 col-end-2 row-start-5">
                <Button type="submit" onClick={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true)
                    setIsSuccess(false)
                    setIsError(false)
                    setErrorMessage("")
                    setTimeout(()=>{
                        setIsSubmitting(false)
                        setIsSuccess(true)
                    }, 2000
                    )
                }}>Submit</Button>
                {isSubmitting && <p className="text-sm text-green-500">Submitting...</p>}
                {isSuccess && <p className="text-sm text-green-500">Success!</p>}
            </div>
			{isError && <div className="text-red-500">{errorMessage}</div>}
		</form>
	)
}

export default Index

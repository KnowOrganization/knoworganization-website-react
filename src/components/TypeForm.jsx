import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const questions = [
	{
		id: 1,
		question:
			"1. Let's Get Started: What brings you to Know. Organization today?",
		choices: [
			"I have a project in mind and need some expertise. (We'd love to hear about it!)",
			"I'm curious about your services and want to learn more. (Happy to answer any questions!)",
			"I'm looking for new ideas and inspiration. (We're full of them!)",
			"Just saying hello, your work is impressive! (Thanks, the feeling's mutual!)",
		],
	},
	{
		id: 2,
		question:
			"2. Where are you headed? What kind of challenge are you facing or goal are you pursuing?",
		choices: [
			"Tech Solutions: Software challenges, AI mysteries, future-proofing my business.",
			"Design Excellence: Branding puzzles, user journeys that wow, impactful communication.",
			"Data Decoding: Making sense of information, turning insights into action.",
			"Uncharted Waters: (Tell us about your unique adventure!)",
		],
	},
	{
		id: 3,
		question:
			"3. Tell us a bit about yourself: Who are you on this innovation journey?",
		choices: [
			"Individual innovator",
			"Startup squad member",
			"Established company representative",
			"Other (Tell us how you contribute!)",
		],
	},
	{
		id: 4,
		question:
			"4. Let's connect! We'd love to keep the conversation going. Share your preferred contact method:",
		choices: [
			"Email: Drop your address in the field below, and we'll be in touch!",
			"Phone: (Optional) Leave your number if you'd like a call!",
		],
	},
];

const Typeform = () => {
	const [currentQuestion, setCurrentQuestion] = React.useState(0);

	const formik = useFormik({
		initialValues: {
			selectedChoice: "",
			email: "",
			phone: "",
		},
		validationSchema: Yup.object({
			selectedChoice: Yup.string().required("Please select an answer"),
			email: Yup.string()
				.email("Please enter a valid email address")
				.when("selectedChoice", {
					is: (value) =>
						value ===
						"Email: Drop your address in the field below, and we'll be in touch!",
					then: () =>
						Yup.string().required("Please enter your email address"),
				}),
			phone: Yup.string().when("selectedChoice", {
				is: (value) =>
					value ===
					"Phone: (Optional) Leave your number if you'd like a call!",
				then: () => Yup.string().required("Please enter your phone number"),
			}),
		}),
		onSubmit: (values) => {
			// Handle form submission logic here
			console.log(values); // Move to the next question
			setCurrentQuestion((prevQuestion) => prevQuestion + 1); // Reset selectedChoice for the next question
			formik.setFieldValue("selectedChoice", "");
		},
	});

	const currentQuestionData = questions[currentQuestion];

	if (!currentQuestionData) {
		// Display a thank you message or redirect to a different page after the last question
		return (
			<div className="text-center mt-16 text-2xl">
				Thank you for sharing your story! We'll reach out and continue the
				conversation soon.
			</div>
		);
	}

	return (
		<div className="bg-secondary p-16 rounded-md  mx-auto flex flex-col items-center justify-center ">
			{/* Content wrapper */}
			<div className="bg-secondary p-8 rounded-lg  w-full ">
				<h1 className="text-3xl  mb-6 font-anton ">
					{currentQuestionData.question}
				</h1>
				<form onSubmit={formik.handleSubmit} className=" flex justify-center items-center flex-col">
					{currentQuestionData.choices.map((choice, index) => (
						<button
							key={index}
							type="button"
							onClick={() =>
								formik.setFieldValue("selectedChoice", choice)
							}
							className={`mb-4 cursor-pointer focus:outline-none text-lg ${
								formik.values.selectedChoice === choice
									? "bg-black text-secondary"
									: "bg-secondary text-gray-700 hover:bg-gray-100"
							} p-4 rounded-md transition-all duration-300 w-full`}
						>
							{choice}
							{formik.values.selectedChoice === choice && (
								<span className="ml-2">&#10003;</span>
							)}
						</button>
					))}
					{currentQuestionData.id === 4 && ( // Show email/phone fields only for the last question
						<div>
							{formik.values.selectedChoice ===
								"Email: Drop your address in the field below, and we'll be in touch!" && (
								<input
									type="email"
									name="email"
									className="mb-4 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 w-full"
									placeholder="Enter your email address"
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
							)}
							{formik.values.selectedChoice ===
								"Phone: (Optional) Leave your number if you'd like a call!" && (
								<input
									type="tel"
									name="phone"
									className="mb-4 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 w-full"
									placeholder="Enter your phone number"
									value={formik.values.phone}
									onChange={formik.handleChange}
								/>
							)}
						</div>
					)}
					{formik.touched.selectedChoice &&
					formik.errors.selectedChoice ? (
						<div className="text-red-500">
							{formik.errors.selectedChoice}
						</div>
					) : null}
					<button
						type="submit"
						className="font-montserrat text-2xl rounded-full border-2 w-[400px] mx-20 border-primary  py-3 hover:bg-primary hover:text-white transition-all ease-in duration-300 opacity-300 "
					>
						{currentQuestion === questions.length - 1 ? "Finish" : "Next"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Typeform;

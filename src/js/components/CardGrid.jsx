import Card from "./Card";

const cardsData = [
	{
		image: "https://placehold.co/500x325",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		image: "https://placehold.co/500x325",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		image: "https://placehold.co/500x325",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		image: "https://placehold.co/500x325",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
];

const CardGrid = () => {
	return (
		<div className="container py-5">
			<div className="row g-4">
				{cardsData.map((card, index) => (
					<Card
						key={index}
						image={card.image}
						title={card.title}
						text={card.text}
					/>
				))}
			</div>
		</div>
	);
};

export default CardGrid;
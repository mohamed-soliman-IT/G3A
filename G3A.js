document.addEventListener('DOMContentLoaded', function () {
    const visionLink = document.querySelector('.vision-link');
    const missionLink = document.querySelector('.mission-link');
    const valueLink = document.querySelector('.value-link');
    const visionHeading = document.getElementById('vision-heading');
    const visionParagraph = document.getElementById('vision-paragraph');

    // Function to handle click on Vision link
    visionLink.addEventListener('click', function (event) {
        event.preventDefault();
        visionHeading.textContent = 'Vision';
        visionParagraph.textContent = "To utterly change the inland transportation market in Egypt, by continuously surpassing the needs of our esteemed customers while leading their operations with sustainability and green transformation. We are dedicated to pioneering multi-model, eco-friendly transportation practices, reducing carbon footprint, and setting new standards for environmentally responsible transportation solutions, all while upholding unwavering commitment to quality and service excellence.";
    });

    // Function to handle click on Mission link
    missionLink.addEventListener('click', function (event) {
        event.preventDefault();
        visionHeading.textContent = 'Mission';
        visionParagraph.textContent =
            "At Cargo Railways, we are unwaveringly committed to being the industry'sforemost choice for multimodal transportation. Our mission is to consistently\
        exceed customer expectations by delivering exceptional, tailored services\
        at competitive rates. We prioritize the well-being and professional growth\
        of our dedicated employees, fostering an environment that empowers\
        excellence, innovation, and a deep sense of purpose.";
    });

    // Function to handle click on Value link
    valueLink.addEventListener('click', function (event) {
        event.preventDefault();
        visionHeading.textContent = 'Value';
        visionParagraph.textContent = "Your value paragraph goes here...";
    });
});





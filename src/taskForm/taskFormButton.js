import "./task-form-button.scss"

const taskFormButton = (() => {
    let buttonId = "#task-form-button";

    let button = document.querySelector(buttonId);

    //All the button has to do is display the modal
    const displayModal = (modal) => {
        modal.style.display = "flex";
    };

    //Only public method, gets modal, adds an event listener on the button to display it
    const addDisplayModalOnClick = (modalSelector) => {
        let modal = document.querySelector(modalSelector);
        button.addEventListener("click", () => {displayModal(modal)});
    };

    return {
        addDisplayModalOnClick,
    };
})();

export default taskFormButton;
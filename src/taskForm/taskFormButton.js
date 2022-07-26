import "./task-form-button.scss"

const taskFormButton = (() => {
    let buttonId = "#task-form-button";

    let button = document.querySelector(buttonId);

    const displayModal = (modal) => {
        modal.style.display = "flex";
    };

    const addDisplayModalOnClick = (modalSelector) => {
        let modal = document.querySelector(modalSelector);
        button.addEventListener("click", () => {displayModal(modal)});
    };

    return {
        addDisplayModalOnClick,
    };
})();

export default taskFormButton;
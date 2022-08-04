const taskFormButton = (() => {
    //All the button has to do is display the modal
    const displayModal = (modalSelector) => {
        let modal = document.querySelector(modalSelector);
        modal.style.display = "flex";
    };

    return {
        displayModal,
    };
})();

export default taskFormButton;
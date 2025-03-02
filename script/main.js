// Trigger to play music in the background with SweetAlert
window.addEventListener("load", async () => {
    const result = await Swal.fire({
        title: "Do you want to play music in the background?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
    });

    const audio = document.querySelector(".song");
    if (result.isConfirmed) {
        audio.play().catch(error => console.log("Autoplay prevented:", error));
    }

    animationTimeline();
});

// Animation Timeline
const animationTimeline = () => {
    // Ensure elements exist before modifying them
    const textBoxChars = document.querySelector(".hbd-chatbox");
    const hbd = document.querySelector(".wish-hbd");

    if (textBoxChars && hbd) {
        textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
        hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;
    }

    const ideaTextTrans = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
    const ideaTextTransLeave = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };

    // Create GSAP timeline
    const tl = gsap.timeline();

    tl.to(".container", { duration: 0.6, visibility: "visible" })
        .from(".one", { duration: 0.7, opacity: 0, y: 10 })
        .from(".two", { duration: 0.4, opacity: 0, y: 10 })
        .to(".one", { duration: 0.7, opacity: 0, y: 10 }, "+=3.5")
        .to(".two", { duration: 0.7, opacity: 0, y: 10 }, "-=1")
        .from(".three", { duration: 0.7, opacity: 0, y: 10 })
        .to(".three", { duration: 0.7, opacity: 0, y: 10 }, "+=3")
        .from(".four", { duration: 0.7, opacity: 0 })
        .to(".four", { duration: 0.5, opacity: 0, y: 10 }, "+=1")
        .from(".idea-1", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-1", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
        .from(".idea-2", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-2", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
        .from(".idea-3", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-3 strong", { duration: 0.5, scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
        .to(".idea-3", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
        .from(".idea-4", { duration: 0.7, ...ideaTextTrans })
        .to(".idea-4", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
        .from(".idea-5", { duration: 0.7, rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, opacity: 0 }, "+=1.5")
        .to(".idea-5 span", { duration: 0.7, rotation: 90, x: 8 }, "+=1.4")
        .to(".idea-5", { duration: 0.7, scale: 0.2, opacity: 0 }, "+=2")
        .from(".profile-picture", { duration: 0.5, scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
        .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: "elastic.out(1, 0.5)" }, 0.1)
        .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: "expo.out" }, 0.1, "party")
        .from(".wish h5", { duration: 0.5, opacity: 0, y: 10, skewX: "-15deg" }, "party")
        .to(".six", { duration: 0.5, opacity: 0, y: 30, zIndex: "-1" })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(".last-smile", { duration: 0.5, rotation: 90 }, "+=1");

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    if (replyBtn) {
        replyBtn.addEventListener("click", () => tl.restart());
    }
};

export const Mobile_Box ={
    width:"100%",
    
flexDirection:"column",
    alignItems:"space-evanly",
    
    display:{xs:"flex",md:"none"}
}


export const SteperMobileStyle ={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
 
    width:"100%"
}

export const StepMobileStyle = {
    width: "100%", display: "flex", justifyContent: "center" 
}


export const TitleBox =(activeStep,index,theme)=>{
    const S1 ={
        display: "flex",
        justifyContent: "space-evenly",
        width: "70%",
        cursor: "pointer",
        alignItems: "center",
        "&:hover": {
            backgroundColor:
              (activeStep !== index && theme === "dark" && "#ddd") ||
              (activeStep !== index && theme !== "dark" && "#1116"),
            opacity:
              (activeStep !== index && theme === "dark" && "0.1") ||
              (activeStep !== index && theme !== "dark" && "none"),
          },
          backgroundColor:
            (activeStep === index && theme === "dark" && "#fff") ||
            (activeStep === index && theme !== "dark" && "#111"),
        p: 2,
    }

    return S1
}


export const TitleMobiletypo =(activeStep,index)=>{
    const S2 ={
        cursor: "pointer",
        whiteSpace: "nowrap",
        color: activeStep == index ? "#111" : "#8E96A0",
        fontSize: "15px",
    }

    return S2
    
}

export const DescTypo ={
    fontSize: "13px",
    fontWeight: "bold",
    m: 2,
}

export const mobileIcon ={
    fontSize: "8px", ml: 1 
}
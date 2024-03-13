import React from 'react'
import { Textarea } from './style'
import { useTranslation } from "react-i18next";
export default function TextArea(){
    const {t} = useTranslation()
    return(
        <Textarea
        maxRows={4}
        aria-label="maximum height"
        placeholder={t('contactus.textarea')}
        />
    )
}
'use client'

import React from "react";
import * as fonts from "@/app/globals/fonts";
import "@/app/globals/globals.css";

export function SiteFooter() {
    return (
        <>
            <div className="siteFooterDiv">
                <p className={`${fonts.dotoBlack.className} place-self-center drop-shadow-[0px_0px_.5em_#000000AA]`} onClick={(() => window.open("https://github.com/iartemyst", "_blank"))}>
                    Designed + Developed by Me! | Visit my Github | © 2026
                </p>
            </div>
        </>
        )
}
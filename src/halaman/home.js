import React from "react";
import Meta from '../components/Meta';

const home = () => {
    const pageTitle = 'Halaman Utama';
    return (
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <Meta title={pageTitle}/>
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <div className="text-xl font-bold">
                        Kelompok 44
                    </div>
                    <div class="divide-y divide-gray-200">
                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <p>Tugas Modul 5 Praktikum RPLBK 2021 dari Kelompok 44 yang beranggotakan:</p>
                        <ul class="list-disc space-y-2">
                            <li class="flex items-start">
                                <span class="h-6 flex items-center sm:h-7">
                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <p class="ml-2">
                                    Muhammad Abdul Majid (21120118140042)
                                </p>
                            </li>
                            <li class="flex items-start">
                                <span class="h-6 flex items-center sm:h-7">
                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                </span>
                                <p class="ml-2">
                                    Pradana Ega Putra (21120118140075)
                                </p>
                            </li>
                        </ul>
                        <p>Program ini menggunakan React dan Tailwind CSS. Isi dari program ini telah memenuhi syarat dari penugasan Modul 5 Praktikum RPLBK 2021.</p>
                    </div>
                    <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                        <p>Berikut adalah link github dari program ini:</p>
                        <p>
                        <a href="https://github.com/Praktikum-RPLBK-Kel44/Tugas_Modul5_Kel44.git" class="text-cyan-600 hover:text-cyan-700">Link Github &rarr; </a>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default home;
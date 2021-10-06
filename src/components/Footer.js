const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className='text-center text-capitalize'>
                Copyrigt Kelompok 44 Praktikum RPLBK 2021 &copy; {year}
            </footer>
        </>
    )
};

export default Footer
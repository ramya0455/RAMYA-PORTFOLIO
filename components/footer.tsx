export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm opacity-90">© {currentYear} Ramya P. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:opacity-80 transition-opacity">
              Privacy
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Terms
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

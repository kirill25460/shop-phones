export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <MenuContainer>
        <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div />
          <div />
          <div />
        </BurgerButton>
        <Menu isOpen={isOpen}>
          <MenuItem>
            <Link href="/" onClick={() => setIsOpen(false)}>Главная</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/products" onClick={() => setIsOpen(false)}>Товары</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about" onClick={() => setIsOpen(false)}>О нас</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Контакты</Link>
          </MenuItem>
        </Menu>
      </MenuContainer>
    );
  }
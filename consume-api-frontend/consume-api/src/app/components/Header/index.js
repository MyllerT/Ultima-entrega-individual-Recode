import Link from 'next/link'

export default function Header() {
	return (
		<header className="header">
			<img src="/a748b52e8a3242eeb1add91d1c2feff6-removebg-preview.png" alt="logo" />
			<ul>
				<li>
					<Link href="/RotaUm">Destino</Link>
				</li>
				<li>
					<Link href="/RotaDois">Contato</Link>
				</li>
				<li>
					<Link href="/RotaTres">Promoção</Link>
				</li>
			</ul>
		</header>
	)
}
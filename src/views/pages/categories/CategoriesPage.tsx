import { FC } from "react";
import { useProducts } from "@/hooks";

import styles from './CategoriesPage.module.css'
import { Container } from "@/components";
import { Link } from "react-router-dom";
import { Spin } from "antd";

export const CategoriesPage: FC = () => {
	const { data, isFetching } = useProducts()

	return <Container>
		{ isFetching && <Spin/> }

		<div className={ styles.categories }>
			{ data?.categories.map(category => (
				<Link to={ `/categories/${ category.id }` } state={ { isShowBack: true } } key={ category.id }
							className={ styles.category }
				>
					<div className={ styles.image }>
						<img src={ category.image } alt=""/>
					</div>

					<div className={ styles.name }>
						{ category.title }
					</div>
				</Link>
			)) }
		</div>
	</Container>
}
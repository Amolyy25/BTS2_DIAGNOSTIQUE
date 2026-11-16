import { ColumnFlex, RowFlex } from '@/Components/Flex'
import { Text } from '@/Components/Text'
import {ListSalleComponents} from "@/Components/SalleComponents/ListSalleComponents.tsx";
export const Home = () => {
    return (
        <ColumnFlex>
            <RowFlex>
                <Text >Bienvenue sur le site sallelib</Text>
            </RowFlex>
            <ListSalleComponents />
        </ColumnFlex>
    )
}

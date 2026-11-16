import {Text} from "@/Components/Text.tsx";
import {getAllSalles} from "@/domaine/Home/salles.api.ts";
import {useEffect, useState} from "react";
import type {Salle} from "@/domaine/Home/salle.constantes.ts";
import {ColumnFlex} from "@/Components/Flex.tsx";

export const ListSalleComponents = () => {
    const [salles, setSalles] = useState<Salle[]>([])

    useEffect(() => {
        getAllSalles().then((data) => setSalles(data ?? []))
    }, [])


    return (
        <>
            <Text bold>Liste des salles disponible</Text>
                <ColumnFlex>
                    {salles.map((salle) => (
                        <Text key={salle.id}>
                            {salle.nom} - {salle.capacite} places - Étage :{salle.etage}
                        </Text>
                    ))}
            </ColumnFlex>
        </>
    )
}

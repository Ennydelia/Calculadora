import { ScrollView } from "react-native";
import Greeting from "./Greeting";

export default function ListOfGreetings(props) {
    return <ScrollView>
        {props.list.map((item, key) =>
            <Greeting key={key} name={item} />
        )}
    </ScrollView>
}

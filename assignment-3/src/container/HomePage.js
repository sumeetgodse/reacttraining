import InputText from '../components/InputText';
import InputFile from '../components/InputFile';
import SelectOptions from '../components/SelectOptions';
import RadioOptions from '../components/RadioOptions';
import GetDate from '../components/GetDate';
import Range from '../components/Range';

const HomePage = () => {
    return (
        <div>
            <InputText />
            <InputFile />
            <GetDate />
            <SelectOptions />
            <RadioOptions />
            <Range />
        </div>
    );
}

export default HomePage;

import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 'dwexc',
      label: 'Can you use react in a proj?',
      content: 'Yes you can use react in any web developement project what you wanna build or create.'
    },
    {
      id: 'dwesx',
      label: 'Can you use react in a proj?',
      content: 'Yes you can use react in any web developement project what you wanna build or create.'
    },
    {
      id: 'dwcex',
      label: 'Can you use react in a proj?',
      content: 'Yes you can use react in any web developement project what you wanna build or create.'
    },
    {
      id: 'dswex',
      label: 'Can you use react in a proj?',
      content: 'Yes you can use react in any web developement project what you wanna build or create.'
    },
  ];
  return (
    <div className="App">
      <Accordion items={items}/>
    </div>
  );
}

export default AccordionPage;

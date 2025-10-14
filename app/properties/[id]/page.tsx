import PropertyDetailClient from "../_components/PropertyDetailClient";

type tParams = Promise<{ id: string }>;

const PropertyDetails = async (props: { params: tParams }) => {
  const { id } = await props.params;
  return <PropertyDetailClient propertyId={id} />;
};

export default PropertyDetails;

import { Metadata } from "next";
import PropertyDetailClient from "../_components/PropertyDetailClient";
import { getPropertyByID } from "@/actions/getPropertyByID";
import { notFound } from "next/navigation";

type tParams = Promise<{ id: string }>;

// Adjusted function to handle the data properly
export async function generateMetadata(props: {
  params: tParams;
}): Promise<Metadata | undefined> {
  const { id } = await props.params;
  const property = await getPropertyByID(id); // directly getting the property, not an array

  if (!property) {
    return notFound();
  }

  const propertyFirstImage = property.images ? property.images[0] : ""; // safely access the first image

  return {
    title: property.name,
    description:
      property.excerpt || `One of our best properties is the ${property.name}.`,
    openGraph: {
      title: property.name,
      description:
        property.excerpt ||
        `One of our best properties is the ${property.name}.`,
      type: "website",
      locale: "en_US",
      url: `${process.env.NEXT_PUBLIC_URL}/properties/${property._id}/`,
      siteName: "Harry Ogieva",
      images: [
        {
          url: propertyFirstImage || "",
          width: 1000,
          height: 1000,
        },
      ],
    },
  };
}

const PropertyDetails = async (props: { params: tParams }) => {
  const { id } = await props.params;
  const property = await getPropertyByID(id); // directly getting the property

  if (!property) {
    return notFound();
  }

  return <PropertyDetailClient propertyId={id} />;
};

export default PropertyDetails;

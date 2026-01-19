import React from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div>
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <MdProductionQuantityLimits />
          </EmptyMedia>
          <EmptyTitle>No Products Here</EmptyTitle>
          <EmptyDescription className={"uppercase"}>
            Go find your products you like{" "}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link to={"/"}>Go</Link>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default EmptyState;

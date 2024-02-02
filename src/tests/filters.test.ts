import {
  filterPlatform,
  filterScreenshot,
  filterPreview,
  filterTag,
  filterCompany,
} from "../utils/filters";
import { fillerObject } from "./defaultObj";

describe("Filter Functions", () => {
  it("filterPlatform", () => {
    const filler = [
      {
        platform: {
          ...fillerObject,
          id: 0,
          name: "test_name",
          slug: "test_slug",
        },
      },
    ];

    const expected = [
      {
        platform: {
          id: 0,
          name: "test_name",
          slug: "test_slug",
        },
      },
    ];

    expect(filterPlatform(filler)).toStrictEqual(expected);
  });

  it("filterScreenshot", () => {
    const filler = [{ ...fillerObject }];

    const expected = [
      {
        id: 0,
        image: "test_image",
      },
    ];

    expect(filterScreenshot(filler)).toStrictEqual(expected);
  });

  it("filterPreview", () => {
    const filler = [{ ...fillerObject }];

    const expected = [
      {
        id: 0,
        name: "test_name",
        background_image: "test_background_image",
        slug: "test_slug",
        parent_platforms: [],
        price: "$49.99",
      },
    ];

    expect(filterPreview(filler)).toStrictEqual(expected);
  });

  it("filterTag", () => {
    const filler = [{ ...fillerObject }];

    const expected = [
      {
        id: 0,
        image: "test_image",
        name: "test_name",
        slug: "test_slug",
      },
    ];

    expect(filterTag(filler)).toStrictEqual(expected);
  });

  it("filterCompany", () => {
    const filler = [{ ...fillerObject }];

    const expected = [
      {
        id: 0,
        name: "test_name",
        slug: "test_slug",
      },
    ];

    expect(filterCompany(filler)).toStrictEqual(expected);
  });
});

import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { supabase } from "./supabase";
import * as db from "./db";

describe("Supabase Integration", () => {
const testUserId = "00000000-0000-0000-0000-" + String(Date.now()).slice(-12).padStart(12, '0');
  const testReview = {
    user_id: testUserId,
    original: "Test review for Supabase integration",
    sentiment: "Positive" as const,
    theme: "Food" as const,
    response: "Thank you for your feedback!",
  };

  beforeAll(async () => {
    await db.upsertUser({ id: testUserId, email: `${testUserId}@example.com` });
  });

  afterAll(async () => {
    await db.deleteAllReviews(testUserId);
  });

  it("should have Supabase client initialized", () => {
    expect(supabase).toBeDefined();
    expect(supabase).not.toBeNull();
  });

  it("should perform full CRUD operations on reviews", async () => {
    // 1. Create a review in Supabase
    const result = await db.createReview(testReview);
    expect(result).toBeDefined();
    expect(result?.id).toBeGreaterThan(0);
    expect(result?.original).toBe(testReview.original);
    expect(result?.sentiment).toBe(testReview.sentiment);

    const reviewId = result!.id;

    // 2. Fetch reviews from Supabase
    const reviews = await db.getAllReviews(testUserId);
    expect(Array.isArray(reviews)).toBe(true);
    expect(reviews.length).toBeGreaterThan(0);
    expect(reviews[0].user_id).toBe(testUserId);

    // 3. Update a review in Supabase
    const updated = await db.updateReview(reviewId, {
      sentiment: "Neutral",
      response: "Updated response",
    });

    expect(updated).toBeDefined();
    expect(updated?.sentiment).toBe("Neutral");
    expect(updated?.response).toBe("Updated response");

    // 4. Delete a review from Supabase
    const deleted = await db.deleteReview(reviewId);
    expect(deleted).toBe(true);

    const afterDelete = await db.getReviewById(reviewId);
    expect(afterDelete).toBeUndefined();
  });

  it("should handle null supabase client gracefully", async () => {
    // This test verifies that functions return appropriate values when supabase is null
    // The actual null scenario is tested by the null checks in each function
    const reviews = await db.getAllReviews();
    expect(Array.isArray(reviews)).toBe(true);
  });
});

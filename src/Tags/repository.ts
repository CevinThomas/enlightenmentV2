import {CreateTagPayload} from "./interfaces";
import db, {sql} from "../../db/database";

export const createTagRep = async (createPayload: CreateTagPayload) => {
    try {
        await db.query(sql`
        INSERT INTO tags (title) VALUES (${createPayload.title})
`)
    }
};

export const fetchAllTagsRep = async () => {
    try {
        return (await db.query(sql`
            SELECT t.title, array_agg(c.title) AS categories, array_agg(s.title) AS subjects
            FROM tags_relation
                     INNER JOIN categories c on c.category_id = tags_relation.category_id
                     INNER JOIN subjects s on s.subject_id = tags_relation.subject_id
                     INNER JOIN tags t on t.tag_id = tags_relation.tag_id
            GROUP BY t.title
`))
    }
};
export const fetchSingleTagRep = async (tagId: number) => {};
export const deleteTagRep = async (tagId: number) => {};

initSidebarItems({"fn":[["array_to_json_array","Converts an arrow [`ArrayRef`] into a `Vec` of Serde JSON [`serde_json::Value`]’s"],["record_batches_to_json_rows","Converts an arrow [`RecordBatch`] into a `Vec` of Serde JSON [`serde_json::map::JsonMap`]s (objects)"]],"struct":[["JsonArray","Produces JSON output as a single JSON array. For example"],["LineDelimited","Produces JSON output with one record per line. For example"],["Writer","A JSON writer which serializes [`RecordBatch`]es to a stream of `u8` encoded JSON objects. See the module level documentation for detailed usage and examples. The specific format of the stream is controlled by the [`JsonFormat`] type parameter."]],"trait":[["JsonFormat","This trait defines how to format a sequence of JSON objects to a byte stream."]],"type":[["ArrayWriter","A JSON writer which serializes [`RecordBatch`]es to JSON arrays"],["LineDelimitedWriter","A JSON writer which serializes [`RecordBatch`]es to newline delimited JSON objects"]]});